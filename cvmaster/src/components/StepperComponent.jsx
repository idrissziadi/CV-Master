// components/StepperComponent.js
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import CVPreview from './CVPreview';
import TemplateSelection from './TemplateSelection';
import CustomizationOptions from './CustomizationOptions';
import templates from '../data/templates'; // Importez vos modèles ici

const steps = [
  'Informations Personnelles',
  'Expériences Professionnelles',
  'Formation',
  'Compétences',
  'Projets',
  'Sélection du Modèle',
  'Personnalisation',
  'Aperçu du CV'
];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleDataChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    handleNext(); // Passer à l'étape suivante après la sélection du modèle
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfoForm onDataChange={handleDataChange} />;
      case 1:
        return <ExperienceForm onDataChange={handleDataChange} />;
      case 2:
        return <EducationForm onDataChange={handleDataChange} />;
      case 3:
        return <SkillsForm onDataChange={handleDataChange} />;
      case 4:
        return <ProjectsForm onDataChange={handleDataChange} />;
      case 5:
        return <TemplateSelection onSelectTemplate={handleSelectTemplate} />;
      case 6:
        return (
          <CustomizationOptions 
            selectedTemplate={selectedTemplate} 
            onDataChange={handleDataChange} 
          />
        );
      case 7:
        return <CVPreview data={{ ...formData, template: selectedTemplate }} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mt={2}>
        {renderStepContent(activeStep)}
        <Box mt={2}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Précédent
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleNext}
            disabled={activeStep === 5 && !selectedTemplate} // Désactiver le bouton si aucun modèle n'est sélectionné
          >
            {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default StepperComponent;
