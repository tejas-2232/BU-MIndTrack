import React, { useState } from 'react'
import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'
import Input from '../../components/Input'
import './Forms.scss'

const Forms = () => {
  const [selectedEmotionValue, setSelectedEmotionValue] = useState()
  const [selectedMoodIntensityValue, setSelectedMoodIntensityValue] = useState()
  const [selectedActivity, setSelectedActivity] = useState()
  const [selectedActivityDuration, setSelectedActivityDuration] = useState()
  const [selectedSleepQuality, setSelectedSleepQuality] = useState()
  const [selectedEnergyLevels, setSelectedEnergyLevels] = useState()
  const [selectedAppetite, setSelectedAppetite] = useState()
  const [feelings, setFeelings] = useState()
  const [copingMechanism, setCopingMechanism] = useState()
  const [socialInteractions, setSocialInteractions] = useState()
  const [selectedLocation, setSelectedLocation] = useState()
  const [selectedWeather, setSelectedWeather] = useState()
  const [socialContext, setSocialContext] = useState()
  const [therapyDuration, setTherapyDuration] = useState()
  const [age, setAge] = useState()
  const [medications, setMedications] = useState()
  const [ethnicity, setEthnicity] = useState()
  const [gender, setGender] = useState()
  const [triggers, setTriggers] = useState()
  const [educationLevel, setEducationLevel] = useState()

  const smileyOptions = [
    { value: 'Happy', label: '😊' },
    { value: 'Sad', label: '😢' },
    { value: 'Anxious', label: '😥' },
    { value: 'Excited', label: '🤩' },
    { value: 'Depressed', label: '🫥' },
  ];

  const moodIntensityOptions = [
    ...Array(10).fill().map((_, index) => ({ value: `${index + 1}`, label: `${index + 1}` })),
    { value: `>10`, label: `>10` }
  ];

  const activityOptions = [
    { value: 'work', label: 'Work' },
    { value: 'exercise', label: 'Exercise' },
    { value: 'socializing', label: 'Socializing' },
  ]

  const ethnicityOptions = [
    { value: 'asian', label: 'Asian' },
    { value: 'blackAfrican', label: 'Black or African American' },
    { value: 'hispanicLatino', label: 'Hispanic or Latino' },
    { value: 'whiteCaucasian', label: 'White or Caucasian' },
    { value: 'nativeAmerican', label: 'Native American or Alaska Native' },
    { value: 'nativeHawaiian', label: 'Native Hawaiian or Other Pacific Islander' },
    { value: 'mixed', label: 'Two or More Races' },
    { value: 'other', label: 'Other' },
  ];

  const educationOptions = [
    { value: 'noFormal', label: 'No Formal Education' },
    { value: 'highSchool', label: 'High School Diploma' },
    { value: 'ged', label: 'GED' },
    { value: 'someCollege', label: 'Some College' },
    { value: 'associates', label: 'Associate Degree' },
    { value: 'bachelors', label: 'Bachelors Degree' },
    { value: 'masters', label: 'Masters Degree' },
    { value: 'professional', label: 'Professional Degree' },
    { value: 'doctorate', label: 'Doctorate Degree' },
    { value: 'other', label: 'Other' },
  ];

  const SmileyOption = ({ option }) => (
    <div style={{ fontSize: '24px' }}>
      {option.label}
    </div>
  );

  const SelectedSmiley = ({ value }) => {
    const selectedOption = smileyOptions.find(option => option.value === value);
    return (
      <div style={{ fontSize: '24px' }}>
        {selectedOption ? selectedOption.label : ''}
      </div>
    );
  };

  const ActivityOption = ({ option }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '16px', padding: '5px 10px' }}>
      <span>{option.label}</span>
    </div>
  );

  const SelectedActivity = ({ value }) => {
    const selectedOption = activityOptions.find(option => option.value === value);
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '16px' }}>
        {selectedOption ? (
          <>
            <span>{selectedOption.label}</span>
          </>
        ) : ''}
      </div>
    );
  };

  return (
    <div className='forms-main-container'>
      <div className='mb10'> Select your mood:</div>
      <Dropdown
        id="smiley-dropdown"
        value={selectedEmotionValue}
        options={smileyOptions}
        placeholder="Select a mood"
        handleOnChange={(selectedOption) => setSelectedEmotionValue(selectedOption.value)}
        OptionsComponent={SmileyOption}
        ValueComponent={SelectedSmiley}
        filterBy="label"
      />
      <div className='mb10 mt10'> Select your mood Intensity:</div>
      <Dropdown
        id="smiley-intensity-dropdown"
        value={selectedMoodIntensityValue}
        options={moodIntensityOptions}
        placeholder="Select a mood intensity"
        handleOnChange={(selectedOption) => setSelectedMoodIntensityValue(selectedOption.value)}
        filterBy="label"
      />
      <div className='mb10 mt10'> Select your current activity:</div>
      <Dropdown
        id="activity-dropdown"
        value={selectedActivity}
        options={activityOptions}
        placeholder="Select an activity"
        handleOnChange={(selectedOption) => setSelectedActivity(selectedOption.value)}
        OptionsComponent={ActivityOption}
        ValueComponent={SelectedActivity}
        filterBy="label"
      />
      <div className='mb10 mt10'> {`Activity Duration (in hrs):`}</div>
      <Dropdown
        id="activity-duration-dropdown"
        value={selectedActivityDuration}
        options={moodIntensityOptions}
        placeholder="Select a mood intensity"
        handleOnChange={(selectedOption) => setSelectedActivityDuration(selectedOption.value)}
        filterBy="label"
      />
      <h4>Physical Health:</h4>
      <div className='mb10 mt10'> {`Sleep Quality:`}</div>
      <Dropdown
        id="sleep-quality-dropdown"
        value={selectedSleepQuality}
        options={[{ value: 'Good', label: 'Good' }, { value: 'Normal', label: 'Normal' }, { value: 'Moderate', label: 'Moderate' }, { value: 'Bad', label: 'Bad' }]}
        placeholder="Select your sleep quality"
        handleOnChange={(selectedOption) => setSelectedSleepQuality(selectedOption.value)}
        filterBy="label"
      />
      <div className='mb10 mt10'> {`Energy Levels:`}</div>
      <Dropdown
        id="enery-levels-dropdown"
        value={selectedEnergyLevels}
        options={[{ value: 'Good', label: 'Good' }, { value: 'Normal', label: 'Normal' }, { value: 'Moderate', label: 'Moderate' }, { value: 'Bad', label: 'Bad' }]}
        placeholder="Select your energy level"
        handleOnChange={(selectedOption) => setSelectedEnergyLevels(selectedOption.value)}
        filterBy="label"
      />
      <div className='mb10 mt10'> {`Appetite:`}</div>
      <Dropdown
        id="appetite-dropdown"
        value={selectedAppetite}
        options={[{ value: 'Good', label: 'Good' }, { value: 'Normal', label: 'Normal' }, { value: 'Moderate', label: 'Moderate' }, { value: 'Bad', label: 'Bad' }]}
        placeholder="Select your appetite"
        handleOnChange={(selectedOption) => setSelectedAppetite(selectedOption.value)}
        filterBy="label"
      />
      <Input placeholder='Feelings' id='feelings' label='Enter your thoughts/feelings' value={feelings} className={{ formControl: 'mb10 mt10', label: 'label' }} handleOnChange={(e) => setFeelings(e.target.value)} />
      <Input placeholder='Triggers' id='triggers' label='Enter your triggers' value={triggers} className={{ formControl: 'mb10 mt10', label: 'label' }} handleOnChange={(e) => setTriggers(e.target.value)} />
      <Input placeholder='Type your coping mechanism' id='coping_mechanism' label='What is your coping mechanism?' value={copingMechanism} className={{ formControl: 'mb10 mt10', label: 'label' }} handleOnChange={(e) => setCopingMechanism(e.target.value)} />
      <Input placeholder='Type your social interactions' id='social_interactions' label='What are your social interactions?' value={socialInteractions} className={{ formControl: 'mb10 mt10', label: 'label' }} handleOnChange={(e) => setSocialInteractions(e.target.value)} />
      <h4>Contextual Information:</h4>
      <div className='mb10 mt10'> {`Location:`}</div>
      <Dropdown
        id="location-dropdown"
        value={selectedLocation}
        options={[{ value: 'Home', label: 'Home' }, { value: 'Work', label: 'Work' }, { value: 'Restaurant', label: 'Restaurant' }, { value: 'Gym', label: 'Gym' }]}
        placeholder="Select your appetite"
        handleOnChange={(selectedOption) => setSelectedLocation(selectedOption.value)}
        filterBy="label"
      />
      <div className='mb10 mt10'> {`Weather:`}</div>
      <Dropdown
        id="weather-dropdown"
        value={selectedWeather}
        options={[{ value: 'Clear', label: 'Clear' }, { value: 'Cloudy', label: 'Cloudy' }, { value: 'Sunny', label: 'Sunny' },
        { value: 'Cold', label: 'Cold' }, { value: 'Rainy', label: 'Rainy' }, { value: 'Partly Cloudy', label: 'Partly Cloudy' }]}
        placeholder="Select your appetite"
        handleOnChange={(selectedOption) => setSelectedWeather(selectedOption.value)}
        filterBy="label"
      />
      <Input placeholder='Type your social context (eg: Positive atmosphere)' id='social_context' label='What is your social context?' value={socialContext} className={{ formControl: 'mb10 mt10', label: 'label' }} handleOnChange={(e) => setSocialContext(e.target.value)} />
      <h4>Therapy Details:</h4>
      <div className='mb10 mt10'> {`Therapy session duration (in hrs):`}</div>
      <Dropdown
        id="therapy_session_duration"
        value={therapyDuration}
        options={moodIntensityOptions}
        placeholder="Select a mood intensity"
        handleOnChange={(selectedOption) => setTherapyDuration(selectedOption.value)}
        filterBy="label"
      />
      <Input placeholder='Add your medications' id='medications' label='Mention your medications' value={medications} className={{ formControl: 'mb10 mt10', label: 'label' }} handleOnChange={(e) => setMedications(e.target.value)} />
      <h4>Demographic Informationnfo</h4>
      <Input placeholder='What is your age?' id='age' label='Mention your age' value={age} className={{ formControl: 'mb10 mt10', label: 'label' }} handleOnChange={(e) => setAge(e.target.value)} />
      <div className='mb10 mt10'> {`Select Gender:`}</div>
      <Dropdown
        id="gender"
        value={gender}
        options={[{ value: 'Male', label: 'Male' }, { value: 'Female', label: 'Female' }, { value: 'Other', label: 'Other' }]}
        placeholder="Select your gender"
        handleOnChange={(selectedOption) => setGender(selectedOption.value)}
        filterBy="label"
      />
      <div className='mb10 mt10'> {`Select Ethnicity:`}</div>
      <Dropdown
        id="ethnicity"
        value={ethnicity}
        options={ethnicityOptions}
        placeholder="Select your ethnicity"
        handleOnChange={(selectedOption) => setEthnicity(selectedOption.value)}
        filterBy="label"
      />
      <div className='mb10 mt10'> {`Select your Education Level:`}</div>
      <Dropdown
        id="education_level"
        value={educationLevel}
        options={educationOptions}
        placeholder="Select your education level"
        handleOnChange={(selectedOption) => setEducationLevel(selectedOption.value)}
        filterBy="label"
      />
      <Button className='button button-primary text-center mt20 mb20' handleOnClick={()=>{}}>Submit</Button>
    </div>
  )
}

export default Forms
