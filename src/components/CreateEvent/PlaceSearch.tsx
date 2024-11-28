import React, { useState, useEffect } from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonSpinner,
  IonSearchbar,
} from "@ionic/react";
import { LocationInfo } from "@goflock/types/src/models/event/LocationInfo";
import { locationOutline } from "ionicons/icons";

interface PlaceSearchProps {
  searchLocation: (query: string) => Promise<LocationInfo[]>;
  onSelectLocation: (location: LocationInfo) => void;
}

const PlaceSearch: React.FC<PlaceSearchProps> = ({
  searchLocation,
  onSelectLocation,
}) => {
  const [query, setQuery] = useState<string>("");
  const [locations, setLocations] = useState<LocationInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.length > 2) {
      handleSearch(query);
    } else {
      setLocations([]);
    }
  }, [query]);

  const handleSearch = async (searchText: string) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchLocation(searchText);
      setLocations(results);

      console.log(results);
    } catch (err) {
      console.log(err);
      setError("Error fetching locations");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (location: LocationInfo) => {
    onSelectLocation(location); // Pass the selected location back to the parent component
    setLocations([]);
    setQuery("");
  };

  return (
    <>
      <IonSearchbar
        className="ion-searchbar"
        value={query}
        debounce={700}
        onIonInput={(e) => setQuery(e.detail.value!)}
        placeholder="Enter location"
        searchIcon={locationOutline}
      />

      {loading && <IonSpinner name="crescent" />}

      {error && <p>{error}</p>}

      {locations?.length > 0 && (
        <IonList className="locations-list">
          {locations.map((location, index) => (
            <IonItem
              className="location-item"
              key={index}
              button
              onClick={() => handleSelect(location)}
            >
              <IonLabel>{location.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      )}
    </>
  );
};

export default PlaceSearch;
