import { Box, TextField } from "@mui/material";

type InputProps = {
    label?: string; 
    value: string; 
    name: string;
    type?: string
    required?: boolean;
    error: boolean
    helperText: string | undefined
    onChange: (value: string) => void
}

const commonStyles = {
    m: 4,
  };

const InputText: React.FC<InputProps> = ({label, name, value, type, required, error, helperText, onChange}) => {
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value; 
        onChange(inputValue)
        
    }
    
    return(
        <Box sx={{...commonStyles}}>
            <TextField
                label={label}
                name={name}
                required={required}
                value={value}
                type={type}
                error={error}
                helperText={helperText}
                fullWidth
                variant="outlined"
                onChange={handleInputChange}
            />
        </Box>
        
    )
}

export default InputText;