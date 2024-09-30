import React, { useReducer, useEffect } from 'react';

// Initial state for the event registration form
const initialState = {
  name: '',
  event: '',
  lunchPreference: '',
  participationType: '',
  errors: {
    name: '',
    event: '',
    lunchPreference: ''
  },
  isFormValid: null // Track if the form has been validated
};

// Reducer function to handle state updates and validation
function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD': {
      return {
        ...state,
        [action.field]: action.payload,
        errors: {
          ...state.errors,
          [action.field]: '' // Clear error when field is updated
        },
        isFormValid: null // Reset form validity when user updates a field
      };
    }

    case 'VALIDATE_FORM': {
      const errors = {};
      let isFormValid = true;

      // Validate name
      if (!state.name.trim()) {
        errors.name = 'Name is required';
        isFormValid = false;
      }

      // Validate event selection
      if (!state.event) {
        errors.event = 'Please select an event';
        isFormValid = false;
      }

      // Validate lunch preference
      if (!state.lunchPreference) {
        errors.lunchPreference = 'Please choose a lunch preference';
        isFormValid = false;
      }

      return {
        ...state,
        errors,
        isFormValid // Set the validity of the form
      };
    }

    case 'RESET_FORM': {
      return initialState;
    }

    default:
      throw new Error('Unknown action type');
  }
}

function EventRegistrationForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, payload: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch the validation action
    dispatch({ type: 'VALIDATE_FORM' });
  };

  // Effect to handle form submission after validation completes
  useEffect(() => {
    if (state.isFormValid) {
      // Submit the form if valid
      console.log('Form submitted successfully:', {
        name: state.name,
        event: state.event,
        lunchPreference: state.lunchPreference,
        participationType: state.participationType
      });
      dispatch({ type: 'RESET_FORM' }); // Reset form on successful submission
    } else if (state.isFormValid === false) {
      // Show the validation errors
      console.log('Form has validation errors:', state.errors);
    }
  }, [state.isFormValid, state.errors, state.event, state.lunchPreference, state.name, state.participationType]); // This effect runs when `isFormValid` is updated

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          id="nameInput"
          name="name"
          value={state.name}
          onChange={handleInputChange}
        />
        {state.errors.name && <p style={{ color: 'red' }}>{state.errors.name}</p>}
      </div>

      <div>
        <label htmlFor="eventSelect">Select Event:</label>
        <select
          id="eventSelect"
          name="event"
          value={state.event}
          onChange={handleInputChange}
        >
          <option value="">-- Select an Event --</option>
          <option value="conference">Annual Conference</option>
          <option value="workshop">React Workshop</option>
          <option value="webinar">Web Development Webinar</option>
        </select>
        {state.errors.event && <p style={{ color: 'red' }}>{state.errors.event}</p>}
      </div>

      <div>
        <label htmlFor="lunchPreferenceSelect">Lunch Preference:</label>
        <select
          id="lunchPreferenceSelect"
          name="lunchPreference"
          value={state.lunchPreference}
          onChange={handleInputChange}
        >
          <option value="">-- Select Lunch Preference --</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="nonVegetarian">Non-Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
        {state.errors.lunchPreference && <p style={{ color: 'red' }}>{state.errors.lunchPreference}</p>}
      </div>

      <div>
        <label htmlFor="participationTypeSelect">Participation Type:</label>
        <select
          id="participationTypeSelect"
          name="participationType"
          value={state.participationType}
          onChange={handleInputChange}
        >
          <option value="">-- Select Participation Type --</option>
          <option value="inPerson">In-Person</option>
          <option value="online">Online</option>
        </select>
      </div>

      <button type="submit">Submit Registration</button>

      {state.isFormValid === false && (
        <div style={{ color: 'red' }}>
          Please correct the errors in the form before submitting.
        </div>
      )}
    </form>
  );
}

export default EventRegistrationForm;
