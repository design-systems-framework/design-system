import * as React from 'react';
import HtmlHead from '../components/HtmlHead';
import Reset from '@elemental-ui/reset';
import Button from '@elemental-ui/button';
import Checkbox from '@elemental-ui/checkbox';
import Radio from '@elemental-ui/radio';
import Textarea from '@elemental-ui/textarea';
import TextInput from '@elemental-ui/textinput';

const Home = () => (
  <>
    <HtmlHead title="Design System - Home" />
    <Reset />
    <h1>Design System™</h1>
    <hr />
    <h2>Button</h2>
    <Button>Click Me</Button>
    <h2>Checkbox</h2>
    <Checkbox id="check_one" />
    <label htmlFor="check_one">Check Me</label>
    <h2>Radio</h2>
    <Radio id="radio_one" />
    <label htmlFor="radio_one">Check Me</label>
    <h2>Textarea</h2>
    <Textarea />
    <h2>Text Input</h2>
    <TextInput />
  </>
);

export default Home;
