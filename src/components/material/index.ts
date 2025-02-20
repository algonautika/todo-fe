import { createComponent } from '@lit/react';
import * as md from '@material/web/all';
import * as React from 'react';

export const FilledButton = createComponent({
    tagName: 'md-filled-button',
    elementClass: md.MdFilledButton,
    react: React,
});

export const Checkbox = createComponent({
    tagName: 'md-checkbox',
    elementClass: md.MdCheckbox,
    react: React,
});

export const Radio = createComponent({
    tagName: 'md-radio',
    elementClass: md.MdRadio,
    react: React,
});

export const OutlinedTextField = createComponent({
    tagName: 'md-outlined-text-field',
    elementClass: md.MdOutlinedTextField,
    react: React,
});

export const OutlinedButton = createComponent({
    tagName: 'md-outlined-button',
    elementClass: md.MdOutlinedButton,
    react: React,
});
