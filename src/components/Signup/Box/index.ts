import { Box } from "@mui/material";
import { styled } from "@mui/system";

interface BoxProps {};
const SignupBox = styled(Box)<BoxProps>(() => (
{
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 0px 0px 1px',
    borderRadius: '4px',
    padding: '3rem',
    paddingTop: '1rem',
    paddingBottom: '1rem'
}));

export default SignupBox;