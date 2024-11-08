import { Button, TextField, Typography, Link, Box } from '@mui/material';

const LoginForm = () => {
  return (
    <Box className="flex flex-col items-start w-full max-w-md space-y-4">
      <Typography variant="h3" className="font-semibold text-gray-800">
        Good morning!
      </Typography>
      <Typography variant="h5" className="text-gray-500 mb-4">
        Log in to get started
      </Typography>
      
      <TextField 
        label="Email or username" 
        variant="outlined" 
        fullWidth 
        className="mb-4"
      />
      <TextField 
        label="Password" 
        type="password" 
        variant="outlined" 
        fullWidth 
        className="mb-4"
      />
      
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        className="bg-blue-500 text-white font-semibold mb-3"
      >
        LOG IN
      </Button>
      
      <Typography variant="body2" className="text-gray-600 mt-2">
        By selecting <strong>Log in</strong>, I agree to the{' '}
        <Link href="#" className="text-blue-500 underline">Liberty Mutual Paperless Terms and Conditions</Link>{' '}
        and consent to receive documents electronically.
      </Typography>
      
      <div className="flex flex-col items-start mt-3 space-y-1">
        <Link href="#" className="text-blue-500 underline">Forgot password?</Link>
        <Link href="#" className="text-blue-500 underline">Create your account</Link>
      </div>
    </Box>
  );
};

export default LoginForm;
