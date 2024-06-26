import { createStyles, Container, Title, Text, Button, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
      placeItems: 'center',
    },
    width: '100svw',
    height: '76svh',
    backgroundColor: '#11284b',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundImage:
      // 'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    backgroundImage: 'url(./img2.jpg)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export function HeroImageRight({callback}: {callback: () => void}) {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Experiance{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Corbett Park
                {/* fully featured */}
              </Text>{' '}
              with us
              {/* Experience of a lifetime */}
              {/* React components library */}
            </Title>

            <Text className={classes.description} mt={30}>
              come and join us for the best experience of your life
              where you can see the beauty of nature and the wild life of the jungle 
              {/* Build fully functional accessible web applications with ease – Mantine includes more
              than 100 customizable components and hooks to cover you in any situation */}
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              onClick={() => callback() }
              className={classes.control}
              mt={40}
            >
              {/* Get started */}
              Get In Touch
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}