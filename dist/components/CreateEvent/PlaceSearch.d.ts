import { default as React } from 'react';
import { LocationInfo } from '@goflock/types/src/models/event/LocationInfo';
interface PlaceSearchProps {
    searchLocation: (query: string) => Promise<LocationInfo[]>;
    onSelectLocation: (location: LocationInfo) => void;
}
declare const PlaceSearch: React.FC<PlaceSearchProps>;
export default PlaceSearch;
