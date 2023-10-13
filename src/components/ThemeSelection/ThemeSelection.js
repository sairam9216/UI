import React, { useState } from 'react';
import { Card, CardHeader, Divider, CardContent, TextField, Typography } from '@mui/material';
import i18next from 'i18next';
import useStyle from './style';
import { useDispatch } from 'react-redux';
import { setTheme } from 'store/slice/userSlice';

const themesMap = {
  default: { label: 'Default' },
  darkblue: { label: 'Dark Green' }
};

const ThemeSelection = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const selected = localStorage.getItem('selectedTheme') || 'default';
  const [selectedTheme, setSelectedTheme] = useState(selected);

  const handleChange = (event) => {
    localStorage.setItem('selectedTheme', event.target.value);
    setSelectedTheme(event.target.value);
    dispatch(setTheme(event.target.value));
  };

  return (
    <Card>
      <CardHeader
        // subheader={i18next.t('set_your_default_theme')}
        className={classes.heading}
        title={i18next.t('theme')}
        subheader={
          <Typography sx={{ color: 'white' }}>{i18next.t('set_your_default_theme')}</Typography>
        }
      />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          name="theme"
          onChange={handleChange}
          required
          select
          SelectProps={{ native: true }}
          value={selectedTheme}>
          {Object.keys(themesMap)?.map((item) => (
            <option key={item} value={item}>
              {themesMap[item].label}
            </option>
          ))}
        </TextField>
      </CardContent>
    </Card>
  );
};

export default ThemeSelection;
