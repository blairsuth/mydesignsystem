import React, { ChangeEvent, createRef, useEffect, useId, useState } from 'react';
import { AlertCircle, Check, ChevronDown, ChevronUp, Xmark } from '../Svgs';
import SearchInput, { SearchResultItem } from '../SearchInput/SearchInput';
import css from './select.module.css';

export interface SelectProps {
  /** The message that appears above the component. Supports unlimited text. */
  aboveLabel?: string;

  /** The message that appears in the collapsed component. Supports small amount of text. */
  dropdownLabel?: string;

  /** What options are available to be selected from? */
  options?: Option[];

  /** Does the component respond to user interactions? */
  disabled?: boolean;

  /** Is the component in an error state? */
  error?: boolean;

  /** What should the error label tell the user? Supports unlimited text. */
  errorLabel?: string;

  /** Exposes the options array to the component's parent. */
  onSelectionChange: (options: Option[]) => void;

  /** Whether or not the component should grow to fill its container. */
  growWidth?: boolean;
}

/** Includes a name to be displayed, a value for the developer, and a selected boolean. */
export interface Option {
  name: string;
  value: number | string;
  selected: boolean;
}

/** A dropdown component that supports multi-selection. */
const Select = ({
  aboveLabel = 'Choose Something',
  dropdownLabel = 'Choose an option',
  disabled = false,
  options = [],
  error = false,
  errorLabel = 'Something went wrong with your selection. Please try again.',
  growWidth = false,
  onSelectionChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overflowCount, setOverflowCount] = useState<number>(0);
  const [stateOptions, setStateOptions] = useState<Option[] | undefined>(options);
  const maxSelectedWidth = 275;
  const [selectedWidth, setSelectedWidth] = useState<number>(0);
  const isSelectedOptionsOverflowing = (): boolean => selectedWidth > maxSelectedWidth;
  const refs = stateOptions?.map(() => createRef<HTMLParagraphElement>());

  const optionsAreSelected = stateOptions?.some((o: Option) => o.selected);
  const allOptionsAreSelected = stateOptions?.every((o: Option) => o.selected);

  const uniqueId = (prefix: string) => `${prefix}__${useId()}`;

  const [searchString, setSearchString] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchOptions, setSearchOptions] = useState<Option[] | undefined>(options);

  interface OptionsProps {
    options?: Option[];
    renderOptions: SelectedState;
    handleSelect: (value: number | string, selected: boolean) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLLIElement>, o: Option) => void;
  }

  enum SelectedState {
    Selected = 'isSelected',
    NotSelected = 'notSelected',
    Mixed = 'mixed',
  }

  function getSelectedStateFromBoolean(isSelected: boolean): SelectedState {
    return isSelected ? SelectedState.Selected : SelectedState.NotSelected;
  }

  const Options = ({ options, renderOptions, handleSelect, handleKeyDown }: OptionsProps) => {
    if (options === undefined) return;

    return options
      .filter((o: Option) =>
        renderOptions === SelectedState.Mixed
          ? true
          : renderOptions === getSelectedStateFromBoolean(o.selected),
      )
      .map((o: Option, index: number) => {
        return (
          <li
            aria-checked={options.filter((o: Option) => o.selected).includes(o)}
            tabIndex={0}
            role='option'
            key={`${o.value}-${index}`}
            className={[o.selected ? css.selected : css.unselected, css.option].join(' ')}
            onClick={() => handleSelect(o.value, o.selected)}
            onKeyDown={(e) => handleKeyDown(e, o)}
          >
            {o.selected && (
              <div className={css.check}>
                <Check />
              </div>
            )}
            {o.name}
          </li>
        );
      });
  };

  interface DropdownLabelsProps {
    options?: Option[];
    refs?: React.RefObject<HTMLParagraphElement>[] | undefined;
    dropdownLabel: string;
  }

  const DropdownLabels = ({ options, refs, dropdownLabel }: DropdownLabelsProps) => {
    const selected = options?.filter((o: Option) => o.selected);

    if (selected?.length === 0) {
      return <p className={[css.title, css.placeholder].join(' ')}>&nbsp; {dropdownLabel}</p>;
    }

    return selected?.map((o: Option, index) => {
      const isLastOptionInArray = index === selected.length - 1;

      return (
        <span key={`${o.value}-${index}`} ref={refs?.[index]} className={css.title}>
          {isLastOptionInArray ? `${o.name}` : `${o.name},`}
        </span>
      );
    });
  };

  function handleSetOverflow(selected: boolean) {
    if (isSelectedOptionsOverflowing()) {
      if (Boolean(stateOptions === undefined || refs === undefined)) return;
      setOverflowCount(selected ? overflowCount - 1 : overflowCount + 1);
    }
  }

  function handleSelectOnSearch(selected: boolean, value: number | string) {
    const newSearchOptions = searchOptions?.map((option: Option) => {
      return handleOptionSelection(option, selected, value);
    });
    handleSetOverflow(selected);
    setSearchOptions(newSearchOptions);

    const newStateOptions = stateOptions?.map((option: Option) => {
      return handleOptionSelection(option, selected, value);
    });
    handleSetOverflow(selected);
    setStateOptions(newStateOptions);

    return;
  }

  const handleSelect = (value: number | string, selected: boolean): void => {
    if (isSearching && searchOptions) {
      handleSelectOnSearch(selected, value);
    }

    const newOptions = stateOptions?.map((option: Option) => {
      return handleOptionSelection(option, selected, value);
    });

    handleSetOverflow(selected);

    if (newOptions === undefined) return;

    setStateOptions(newOptions);

    onSelectionChange(newOptions);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, o: Option) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleSelect(o.value, o.selected);
    }
  };

  // TODO: Keyboard navigation

  function clearSelected() {
    const newOptions = stateOptions?.map((option: Option) => {
      return { ...option, selected: false };
    });

    setOverflowCount(1);
    setStateOptions(newOptions);
    setSearchString('');
  }

  useEffect(
    function calculateWidthOfSelected() {
      if (refs === undefined) return;

      let n = 0;
      refs.forEach((ref) => {
        if (ref.current) {
          n += ref.current.offsetWidth;
        }
      });

      setSelectedWidth(n);
    },
    [refs],
  );

  useEffect(
    function handleOverflowCount() {
      if (!isSelectedOptionsOverflowing() || overflowCount <= 0) {
        setOverflowCount(1);
      }
    },
    [isSelectedOptionsOverflowing],
  );

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchString(e.currentTarget.value);
  }

  function handleOnSearch() {
    if (searchString === '') {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }

    const newArray = stateOptions?.filter((o: Option) => {
      return o.name.toLowerCase().includes(searchString.toLowerCase());
    });

    if (newArray === undefined) return;
    setSearchOptions(newArray);
  }

  function handleSetSelected(item: SearchResultItem) {
    handleSelect(item.value, false);
  }

  useEffect(
    function handleSearchReset() {
      if (searchString === '') {
        setIsSearching(false);
      }
    },
    [searchString],
  );

  function handleOptionSelection(option: Option, selected: boolean, value: number | string) {
    if (option.value == value) {
      return { ...option, selected: !selected };
    }

    return option;
  }

  return (
    <div
      className={[css.select, disabled ? css.disabled : null, growWidth ? css.grow : null].join(
        ' ',
      )}
      aria-expanded={isOpen}
      aria-haspopup='listbox'
    >
      <label htmlFor={uniqueId('itt_multi_select')}>{aboveLabel}</label>
      <div
        id={uniqueId('itt_multi_select')}
        className={[css.dropdown_button, error ? css.error : null].join(' ')}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={css.dropdown_labels}>
          <DropdownLabels dropdownLabel={dropdownLabel} options={stateOptions} refs={refs} />
        </div>
        <div className={css.button_group}>
          {isSelectedOptionsOverflowing() && `+${overflowCount}`}

          {optionsAreSelected && (
            <div className={css.no_click}>
              <button className={css.control} onClick={clearSelected}>
                <Xmark />
              </button>
            </div>
          )}

          <div className={css.control} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={css.dropdown_menu} role='listbox' aria-multiselectable={true}>
          <div className={css.search}>
            <SearchInput
              searchOnly={true}
              onChange={handleOnChange}
              onSearch={handleOnSearch}
              setSelected={handleSetSelected}
            />
          </div>

          {!isSearching ? (
            <>
              <ul className={css.options} role='group' aria-label='selected_options'>
                {optionsAreSelected && (
                  <p className={css.options_header} role='presentation'>
                    Selected
                  </p>
                )}
                <Options
                  options={stateOptions}
                  handleKeyDown={handleKeyDown}
                  handleSelect={handleSelect}
                  renderOptions={SelectedState.Selected}
                />
              </ul>

              <ul className={css.options} role='group' aria-label='unselected_options'>
                {optionsAreSelected && !allOptionsAreSelected && (
                  <p className={css.options_header} role='presentation'>
                    Not Selected
                  </p>
                )}
                <Options
                  options={stateOptions}
                  renderOptions={SelectedState.NotSelected}
                  handleSelect={handleSelect}
                  handleKeyDown={handleKeyDown}
                />
              </ul>
            </>
          ) : (
            <>
              <ul className={css.options} role='group' aria-label='searched_options'>
                <Options
                  options={searchOptions}
                  renderOptions={SelectedState.Mixed}
                  handleSelect={handleSelect}
                  handleKeyDown={handleKeyDown}
                />
              </ul>
            </>
          )}
        </div>
      )}
      {error && (
        <div className={css.error_label}>
          <div className={css.error_svg}>
            <AlertCircle />
          </div>

          <span className={css.error_span}>{errorLabel}</span>
        </div>
      )}
    </div>
  );
};

export default Select;
