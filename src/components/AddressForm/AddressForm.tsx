import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import css from './address-form.module.css';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import Select, { Option } from '../Select/Select';

export interface AddressFormProps {
  onFormSubmit: FormEventHandler<HTMLFormElement>;

  isStreetRequired?: boolean;
  isApartmentRequired?: boolean;
  isCityRequired?: boolean;
  isStateRequired?: boolean;
  isZipRequired?: boolean;

  isStreetDisabled?: boolean;
  isApartmentDisabled?: boolean;
  isCityDisabled?: boolean;
  isStateDisabled?: boolean;
  isZipDisabled?: boolean;
  isCountryDisabled?: boolean;
  isSubmitDisabled?: boolean;

  streetState: [string, React.Dispatch<React.SetStateAction<string>>];
  apartmentState: [string, React.Dispatch<React.SetStateAction<string>>];
  cityState: [string, React.Dispatch<React.SetStateAction<string>>];
  stateState: [string, React.Dispatch<React.SetStateAction<string>>];
  zipState: [string, React.Dispatch<React.SetStateAction<string>>];
  countryState: [Option, React.Dispatch<React.SetStateAction<Option[]>>];

  countryOptions?: Option[];
}

const AddressForm = ({
  onFormSubmit,
  isStreetRequired = false,
  isApartmentRequired = false,
  isCityRequired = false,
  isStateRequired = false,
  isZipRequired = false,
  isStreetDisabled = false,
  isApartmentDisabled = false,
  isCityDisabled = false,
  isStateDisabled = false,
  isZipDisabled = false,
  isCountryDisabled = false,
  isSubmitDisabled = false,
  streetState,
  apartmentState,
  cityState,
  stateState,
  zipState,
  countryState,
  countryOptions = [],
}: AddressFormProps) => {
  const [street, setStreet] = streetState;
  const [apartment, setApartment] = apartmentState;
  const [city, setCity] = cityState;
  const [state, setState] = stateState;
  const [zip, setZIP] = zipState;
  const [country, setCountry] = countryState;

  enum Input {
    Street = 'street',
    Apartment = 'apartment',
    City = 'city',
    State = 'state',
    ZIP = 'ZIP',
  }

  function handleSetValue(event: ChangeEvent<HTMLInputElement>, input: Input) {
    const value = event.target.value;

    switch (input) {
      case Input.Street:
        setStreet(value);
        break;

      case Input.Apartment:
        setApartment(value);
        break;

      case Input.City:
        setCity(value);
        break;

      case Input.State:
        setState(value);
        break;

      case Input.ZIP:
        setZIP(value);
        break;

      default:
        throw Error(`${input} Input failed to set value: ${value}\n Full Event: ${event}`);
    }
  }

  return (
    <div className={css.address_form_container}>
      <form className={css.address_form} onSubmitCapture={onFormSubmit}>
        <div className={css.street}>
          <TextInput
            titleText='Street Address'
            placeholderText='Enter street address'
            value={street}
            isDisabled={isStreetDisabled}
            isRequired={isStreetRequired}
            onChange={(e) => handleSetValue(e, Input.Street)}
          />
        </div>
        <div className={css.apartment}>
          <TextInput
            titleText='Apartment, suite, etc.'
            placeholderText='Enter apt, ste, etc'
            value={apartment}
            isDisabled={isApartmentDisabled}
            isRequired={isApartmentRequired}
            onChange={(e) => handleSetValue(e, Input.Apartment)}
          />
        </div>
        <div className={css.city}>
          <TextInput
            titleText='City'
            placeholderText='Enter city'
            value={city}
            isDisabled={isCityDisabled}
            isRequired={isCityRequired}
            onChange={(e) => handleSetValue(e, Input.City)}
          />
        </div>
        <div className={css.state}>
          <TextInput
            titleText='State'
            placeholderText='Enter state'
            value={state}
            isDisabled={isStateDisabled}
            isRequired={isStateRequired}
            onChange={(e) => handleSetValue(e, Input.State)}
          />
        </div>
        <div className={css.zip}>
          <TextInput
            titleText='ZIP Code'
            placeholderText='Enter ZIP Code'
            value={zip}
            isDisabled={isZipDisabled}
            isRequired={isZipRequired}
            onChange={(e) => handleSetValue(e, Input.ZIP)}
          />
        </div>
        <div className={css.country}>
          <Select
            aboveLabel='Country'
            dropdownLabel='Choose country'
            growWidth
            disabled={isCountryDisabled}
            options={countryOptions}
            onSelectionChange={(options) => setCountry(options.filter((o) => o.selected))}
          />
        </div>
        <div className={css.address_form_button}>
          <Button
            buttonType='primary'
            label='Submit'
            size='large'
            type='submit'
            isDisabled={isSubmitDisabled}
          />
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
