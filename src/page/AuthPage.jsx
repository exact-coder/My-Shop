import { Button, Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { domain } from "../env";

export const AuthPage = () => {
  const [authchaker, setAuthchaker] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const loginNow = async() => {
      await axios({
          url: `${domain}/api/login/`,
          method: 'POST',
          data:{
              username: email,
              password: password,
          }
      }).then((response)=> {
         let data = response.data
         if(data['token']){
             window.localStorage.setItem('token',data['token']);
             window.location.href = '/';
         }else{
             alert("Somthing is Wrong here!! Try Again !!")
         }
        
      }).catch((e)=> {
          console.log(e);
          alert("Somthing is Wrong here!! Try Again !!");
      })
  }
  const registerNow = async() => {
    if(password === password2 && email){
      await axios({
        url: `${domain}/api/register/`,
        method: 'POST',
        data: {'email': email, 'password': password}
      }).then((response) => {
        console.log(response.data);
      })
    }else{
      alert("YOU GIVE INCORRECT INFORMATION !!")
    }
  }
  return (
    <Grid
      direction="column"
      container
      style={{
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        minHeight: "80vh",
      }}
    >
      <Typography variant="h3" style={{ fontWeight: "bold" }}>
        {authchaker ? "Register Now" : "Login Now"}
      </Typography>
      <Grid item xs={10} md={6} sm={6}>
        {authchaker && (
          <TextField
            variant="outlined"
            label="Full Name"
            type={"text"}
            style={{
              width: "100%",
              margin: "10px",
              color: "var(--orange)",
              borderRadius: "5px",
            }}
          />
        )}
        <TextField
          variant="outlined"
          label="Email"
          type={"email"}
          style={{
            width: "100%",
            margin: "10px",
            color: "var(--orange)",
            borderRadius: "5px",
          }}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <TextField
          variant="outlined"
          label="Password"
          type={"password"}
          style={{
            width: "100%",
            margin: "10px",
            color: "var(--orange)",
            borderRadius: "5px",
          }}
          onChange={(e) => {setPassword(e.target.value)}}
        />
        {authchaker && (
          <TextField
            variant="outlined"
            label="Confirm Password"
            type={"password"}
            style={{
              width: "100%",
              margin: "10px",
              color: "var(--orange)",
              borderRadius: "5px",
            }}
            onChange={(e) => {setPassword2(e.target.value)}}
          />
        )}
        {authchaker ? <Button onClick={registerNow}
          variant="contained"
          style={{
            background: "var(--orange)",
            color: "var(--white)",
            width: "100%",
            margin: "10px",
            padding: "5px",
            fontSize: "20px",
          }}
        >Regiter</Button> : 
        <Button
          variant="contained"
          style={{
            background: "var(--orange)",
            color: "var(--white)",
            width: "100%",
            margin: "10px",
            padding: "5px",
            fontSize: "20px",
          }}
          onClick={loginNow}
        >Login</Button>
        }
        {authchaker ? (
          <Typography style={{ margin: "10px", textAlign: "center" }}>
            Have an account?{" "}
            <Typography
              style={{
                cursor: "pointer",
                color: "var(--orange)",
                textDecoration: "underline",
              }}
              variant="p"
              onClick={() => setAuthchaker(false)}
            >
              Login Now
            </Typography>
          </Typography>
        ) : (
          <Typography style={{ margin: "10px", textAlign: "center" }}>
            Haven't an account?{" "}
            <Typography variant="p"
              style={{
                cursor: "pointer",
                color: "var(--orange)",
                textDecoration: "underline",
              }}
              onClick={() => {
                setAuthchaker(true);
              }}
            >
              Register Now
            </Typography>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
