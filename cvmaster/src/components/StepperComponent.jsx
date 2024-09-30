import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import TemplateSelection from './TemplateSelection';
import CustomizationOptions from './CustomizationOptions';
import CVPreview from './CVPreview';

const steps = [
  'Informations Personnelles',
  'Expériences Professionnelles',
  'Formation',
  'Compétences',
  'Projets',
  'Sélection du Modèle',
  'Personnalisation',
  'Aperçu du CV',
];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleNext = () => setActiveStep(prevStep => prevStep + 1);
  const handleBack = () => setActiveStep(prevStep => prevStep - 1);

  const handleDataChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    handleNext();
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
        return <CustomizationOptions selectedTemplate={selectedTemplate} onDataChange={handleDataChange} />;
      case 7:
        return <CVPreview data={{ ...formData, template: selectedTemplate }} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box mt={4}>
        {renderStepContent(activeStep)}
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Précédent
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === 5 && !selectedTemplate}
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StepperComponent;
