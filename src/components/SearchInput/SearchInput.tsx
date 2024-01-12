import React, { useId, useState } from 'react';
import styles from './search-input.module.css';
import { SearchGlass } from '../Svgs';
import { LoadingSpinner } from '..';

export interface SearchResultItem {
  name: string;
  value: string;
}

interface SearchInputProps {
  /**
   * Enabling searchOnly will prevent the search results from rendering, which is useful for instances where the search results are being displayed through another component. Defaults to false.
   */
  searchOnly?: boolean;
  /**
   * Pass in value to pre-populate the input.
   */
  searchValue?: string;
  /**
   * If searchOnly is false, these results will be displayed after clicking the "search" button.
   */
  searchResults?: SearchResultItem[];
  /**
   * Optional disabled flag. Defaults to false.
   */
  isDisabled?: boolean;
  /**
   * Optional placeholder text. Defaults to 'Search'.
   */
  placeholderText?: string;
  /**
   * Optional title text above input
   */
  titleText?: string;
  /**
   * Set text value
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  /**
   * Invoked when hitting the 'enter' key or clicking on the search button.
   */
  onSearch: (e: React.FormEvent) => any;
  /**
   * setSelected is invoked when selecting a search result.
   */
  setSelected: (e: SearchResultItem) => any;
  /**
   * Shows loader while retrieving results. Useful for when making API calls. Defaults to false.
   */
  isLoadingResults?: boolean;
}
/**
 * This is a general use SearchInput with the ability to be used as a Search AND Select or just Search
 */
const SearchInput = ({
  isDisabled = false,
  titleText,
  placeholderText = 'Search',
  onSearch,
  onChange,
  setSelected,
  searchValue = '',
  searchResults = [],
  searchOnly = false,
  isLoadingResults,
  ...props
}: SearchInputProps) => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const searchInputId = useId();
  const handleResultClick = (result: SearchResultItem) => {
    setShowResults(false);
    setSelected(result);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setShowResults(false);
  };

  const handleOnSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
    onSearch(e);
  };

  const NoResults = () =>
    !Boolean(searchResults.length) &&
    !isLoadingResults && (
      <button
        className={styles.result}
        onClick={() => setShowResults(false)}
        aria-labelledby={searchInputId + 'no_result_label'}
        id={searchInputId + 'no_result_label'}
      >
        <label htmlFor={searchInputId + 'no_result_label'}>No Results</label>
      </button>
    );

  const SearchResults = () =>
    Boolean(searchResults.length) &&
    !isLoadingResults &&
    searchResults?.map((r, index) => {
      return (
        <button
          className={styles.result}
          onClick={() => handleResultClick(r)}
          aria-labelledby={searchInputId + '_result_label_' + index}
          id={searchInputId + '_result_label_' + index}
          key={r.name + r.value + index}
        >
          <label htmlFor={searchInputId + '_result_label_' + index}>{r.name}</label>
        </button>
      );
    });

  const LoadingContainer = () =>
    isLoadingResults && (
      <div className={styles.loading_container}>
        <LoadingSpinner loading={isLoadingResults} size={'small'} />
      </div>
    );

  return (
    <div className={styles.search_input}>
      <div className={styles.search_input_label}>
        <label id={searchInputId + '_label'} htmlFor={searchInputId}>
          {titleText}
        </label>
      </div>
      <form className={styles.search_row} onSubmit={handleOnSearch}>
        <input
          id={searchInputId}
          aria-describedby={searchInputId + '_label'}
          type={'search'}
          placeholder={placeholderText}
          onChange={handleOnChange}
          value={searchValue || undefined}
          disabled={isDisabled}
          {...props}
        />
        <button type='submit' onClick={handleOnSearch} disabled={isDisabled}>
          <SearchGlass />
        </button>
      </form>
      {showResults && !searchOnly && (
        <div className={styles.search_results}>
          <LoadingContainer />
          <SearchResults />
          <NoResults />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
