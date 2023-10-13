import React, { useState } from 'react';
import { Card, CardHeader, Divider, CardContent, TextField, Typography } from '@mui/material';
import i18next from 'i18next';
import useStyle from './style';

const languageMap = {
  en: { label: 'English', dir: 'ltr', active: true },
  de: { label: 'German', dir: 'ltr', active: false },
  fr: { label: 'Français', dir: 'ltr', active: false }
};

const LanguageSelection = () => {
  const classes = useStyle();
  const selected = localStorage.getItem('i18nextLng') || 'en';
  const [lang, setLang] = useState(selected);

  const handleChange = (event) => {
    i18next.changeLanguage(event.target.value);
    setLang(event.target.value);
    window.location.reload();
  };
  return (
    <Card>
      <CardHeader
        className={classes.heading}
        title={i18next.t('change_language')}
        subheader={
          <Typography sx={{ color: 'white' }}>{i18next.t('set_your_default_language')}</Typography>
        }
      />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          name="language"
          onChange={handleChange}
          required
          select
          SelectProps={{ native: true }}
          value={lang}>
          {Object.keys(languageMap)?.map((item) => (
            <option key={item} value={item}>
              {languageMap[item].label}
            </option>
          ))}
        </TextField>
      </CardContent>
    </Card>
  );
};

export default LanguageSelection;
