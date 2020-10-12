import { Entity } from '../../../../shared/domain/Entity';
import { CharacterFactory } from '../../../characters/useCases/factories';
import { Location } from './location';

interface MapProps {
  location: Location;
  lastLocation?: Location;
  nextAvailableLocations?: Location[];
}
export class Map extends Entity<MapProps> {
  lastLocation?: Location;
  get location(): Location {
    return (
      this.props.location ||
      new Location({
        name: 'HighHill rd',
        enemies: [],
      })
    );
  }
  public moveTo(locationName: string) {
    const currentLocation = this.location;
    const nextLocation = this.nextAvailableLocations.find((loc) => loc.name === locationName);
    if (!nextLocation) {
      throw new Error(`Unable to move to ${locationName} `);
    }
    this.props.lastLocation = currentLocation;
    this.props.nextAvailableLocations = [this.generateLocation()];
    this.props.location = nextLocation;
  }
  get nextAvailableLocations(): Location[] {
    const locs = [...(this.props.nextAvailableLocations || [this.generateLocation()])];
    if (this.lastLocation) {
      locs.push(this.lastLocation);
    }
    return locs;
  }

  private generateLocation(): Location {
    const enemies = [
      new CharacterFactory().create({ health: 4, name: 'Large Bat' }),
      new CharacterFactory().create({ health: 2, name: 'Spider' }),
    ];
    return new Location({
      name: 'Beach Valley',
      enemies: enemies,
    });
  }
}
