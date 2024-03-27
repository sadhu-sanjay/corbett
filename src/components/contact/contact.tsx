

import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
  Alert,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { ContactIconsList } from '../ContactIcons/ContactIcons';
import { useForm } from '@mantine/form';
import { db } from '../../../firebase/firestoredb'
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';


const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    width: '100%',
    boxSizing: 'border-box',
    
    backgroundImage: `linear-gradient(-60deg, yellow  0%, pink 100%)`,
    // marginTop: rem(12),
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {
  const { classes } = useStyles();
  const [ isloading, setLoading ] = useState(false);
  const form = useForm({
    initialValues: {
      // name: 'Sanjay',
      // email: 'SanjayGoswami60@gmail.com',
      // mobile: '9535504428',
      // message: 'Need Help Regarding Hotel accomodation and other things.',
      name: '',
      email: '',
      mobile: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      mobile: (value) => value.trim().length !== 10,
      message: (value) => value.trim().length === 0,
    },
  });
  function handleFormSubmit() {
    console.log(form.values);

    setLoading(true);
    sendDataToaExpressServer()
  }

  function clearForm() {
    form.reset();
  }

  function sendDataToaExpressServer() {

    // const toNumber = '9535504428'
    const toNumber = '919731346840'

    // Add a new document with auto-generated id.
    addDoc(collection(db, "users"), {
      name: form.values.name,
      email: form.values.email,
      mobile: form.values.mobile,
      message: form.values.message,
      to: `+91${toNumber}`,
      body: `New Query from ${form.values.name} \n Email: ${form.values.email} \n Mobile: ${form.values.mobile} \n Message: ${form.values.message}`
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setTimeout(() => {
          setLoading(false)
        }, 1000);
        clearForm()
      }
      )
      .catch((error) => {
        console.error("Error adding document: ", error);
      }
      );
  }

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} style={{maxWidth: '1080px', marginLeft: 'auto', marginRight: 'auto'}} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList variant="white" />

          <Group mt="xl">{icons}</Group>
        </div>
        <form onSubmit={form.onSubmit(() => handleFormSubmit())}>
          <div className={classes.form}>
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('email')}
            />
            <TextInput
              label="Mobile"
              placeholder="+91 9433323423"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('mobile')}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('message')}
            />
            <Alert style={{ position: 'relative' }} hidden={!isloading}>
              Thank you for contacting us. We will get back to you soon.
            </Alert>
            <Group position="right" mt="md">
              <Button loading={isloading} type='submit' className={classes.control}>Send message</Button>
            </Group>
          </div>
        </form>

      </SimpleGrid>
    </div>
  );
}






















// import { TextInput, Textarea, SimpleGrid, Group, Title, Button,
// createStyles } from '@mantine/core';
// import { useForm } from '@mantine/form';
// const useStyles = createStyles((theme) => ({
//   root: {
//     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
//     padding: '1rem',
//   },
// }));

// export function GetInTouchSimple() {
//   const form = useForm({
//     initialValues: {
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     },
//     validate: {
//       name: (value) => value.trim().length < 2,
//       email: (value) => !/^\S+@\S+$/.test(value),
//       subject: (value) => value.trim().length === 0,
//     },
//   });
//   const { classes } = useStyles();

//   return (
//     <div className={classes.root}>
//     <form onSubmit={form.onSubmit(() => {})}>
//       <Title
//         order={2}
//         size="h1"
//         sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
//         weight={900}
//         align="center"
//       >
//         Get in touch
//       </Title>

//       <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
//         <TextInput
//           label="Name"
//           placeholder="Your name"
//           name="name"
//           variant="filled"
//           {...form.getInputProps('name')}
//         />
//         <TextInput
//           label="Email"
//           placeholder="Your email"
//           name="email"
//           variant="filled"
//           {...form.getInputProps('email')}
//         />
//       </SimpleGrid>

//       <TextInput
//         label="Subject"
//         placeholder="Subject"
//         mt="md"
//         name="subject"
//         variant="filled"
//         {...form.getInputProps('subject')}
//       />
//       <Textarea
//         mt="md"
//         label="Message"
//         placeholder="Your message"
//         maxRows={10}
//         minRows={5}
//         autosize
//         name="message"
//         variant="filled"
//         {...form.getInputProps('message')}
//       />

//       <Group position="center" mt="xl">
//         <Button type="submit" size="md">
//           Send message
//         </Button>
//       </Group>
//     </form>
//     </div>
//   );
// }