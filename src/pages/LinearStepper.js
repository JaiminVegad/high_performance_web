import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: "200px",
  },
}));

function getSteps() {
  return ["Basic information", "Personal Information", "Review"];
}
const BasicForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="userName"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="username"
            label="User Name"
            variant="outlined"
            placeholder="Enter Your name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.userName)}
            helperText={errors.userName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: "email is required.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email format",
          },
        }}
        render={({ field }) => (
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.email)}
            helperText={errors.email?.message}
          />
        )}
      />
    </>
  );
};
const PersonalForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Controller
            control={control}
            name="address1"
            rules={{ required: "address is required." }}
            render={({ field }) => (
              <TextField
                id="address1"
                label="Address"
                variant="outlined"
                placeholder="Enter Your address"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.address1)}
                helperText={errors.address1?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            control={control}
            name="state"
            rules={{ required: "state is required." }}
            render={({ field }) => (
              <TextField
                id="state"
                label="State"
                variant="outlined"
                placeholder="Enter Your state"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.state)}
                helperText={errors.state?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            control={control}
            name="city"
            rules={{ required: "city is required." }}
            render={({ field }) => (
              <TextField
                id="city"
                label="City"
                variant="outlined"
                placeholder="Enter Your city"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.city)}
                helperText={errors.city?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            control={control}
            name="zipcode"
            rules={{ required: "zipcode is required." }}
            render={({ field }) => (
              <TextField
                id="zipcode"
                label="Zipcode"
                variant="outlined"
                placeholder="Enter Your zipcode"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.zipcode)}
                helperText={errors.zipcode?.message}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    field.onChange(e);
                  }
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

const ReviewForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
    <h6>Basic Informaiton</h6>
    <Controller
        control={control}
        name="userName"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="username"
            label="User Name"
            disabled='true'
            variant="outlined"
            placeholder="Enter Your name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.userName)}
            helperText={errors.userName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: "email is required.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email format",
          },
        }}
        render={({ field }) => (
          <TextField
            id="email"
            label="Email"
            disabled='true'
            variant="outlined"
            placeholder="Enter Your Email"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.email)}
            helperText={errors.email?.message}
          />
        )}
      />
      <h6>Personal Information</h6>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Controller
            control={control}
            name="address1"
            rules={{ required: "Address is required." }}
            render={({ field }) => (
              <TextField
                id="address1"
                label="Address"
                disabled
                variant="outlined"
                placeholder="Enter Your address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            control={control}
            name="state"
            rules={{ required: "State is required." }}
            render={({ field }) => (
              <TextField
                id="state"
                label="State"
                disabled
                variant="outlined"
                placeholder="Enter Your state"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            control={control}
            name="city"
            rules={{ required: "City is required." }}
            render={({ field }) => (
              <TextField
                id="city"
                label="City"
                disabled
                variant="outlined"
                placeholder="Enter Your city"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            control={control}
            name="zipcode"
            rules={{ required: "Zipcode is required." }}
            render={({ field }) => (
              <TextField
                id="zipcode"
                label="Zipcode"
                disabled
                variant="outlined"
                placeholder="Enter Your zipcode"
                fullWidth
                margin="normal"
                {...field}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    field.onChange(e);
                  }
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <PersonalForm />;
    case 2:
      return <ReviewForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      userName: "",
      email: "",
      address1: "",
      state: "",
      city: "",
      zipcode: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };

  const handleNext = (data) => {
    if (activeStep == steps.length - 1) {
      setActiveStep(activeStep + 1);
      console.log(data);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
