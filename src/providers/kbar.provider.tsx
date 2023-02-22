import { forwardRef, ReactNode, useRef } from 'react';
import { useRouter } from 'next/router';
import {
    IconBrandCodepen,
    IconBrandGithub,
    IconBrandLinkedin,
    IconCode,
    IconCopy,
    IconHome,
    IconMail,
    IconX,
  } from '@tabler/icons';
import { Box, Button, Flex, Grid, Input, Link, Text, useColorModeValue } from '@chakra-ui/react';
import {
    Action,
    ActionImpl,
    KBarAnimator,
    KBarPortal,
    KBarPositioner,
    KBarProvider,
    KBarResults,
    KBarSearch,
    NO_GROUP,
    useKBar,
    useMatches,
  } from 'kbar';

const Provider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    const actions: Action[] = [
        {
            id: 'general-copy-url',
            name: 'Copiar URL',
            section: 'General',
            icon: <IconCopy strokeWidth={1.5} />,
            shortcut: ['u'],
            keywords: 'copy-url',
            perform: () => navigator.clipboard.writeText(window.location.href),
        },
        {
            id: 'general-view-source',
            name: 'Ver código-fonte',
            section: 'General',
            icon: <IconCode strokeWidth={1.5} />, 
            shortcut: ['s'],
            keywords: 'view-source',
            perform: () => window.open('https://github.com/juniorSouza01', '_blank'),
        },
        {
            id: 'go-to-home',
            name: 'Inicio',
            section: 'Navegação',
            icon: <IconHome strokeWidth={1.5} />,
            shortcut: ['g', 'h'],
            keywords: 'go-home',
            perform: () => router.push('/'),
        },
        {
            id: 'social-email',
            name: 'Email',
            subtitle: 'juniorthesouza017@gmail.com',
            section: 'Sociais',
            icon: <IconMail strokeWidth={1.5} />,
            shortcut: ['e'],
            keywords: 'send-mail',
            perform: () => window.open('mailto:juniorthesouza017@gmail.com', '_blank'),
        },
        {
            id: 'social-linkedin',
            name: 'Linkedin',
            subtitle: 'https://www.linkedin.com/in/junior-souza-974932245/',
            section: 'Sociais',
            icon: <IconBrandLinkedin strokeWidth={1.5} />,
            shortcut: ['f', 'l'],
            keywords: 'go-linkedin',
            perform: () => window.open('https://www.linkedin.com/in/junior-souza-974932245/', '_blank'),
        },
        {
            id: 'social-github',
            name: 'Github',
            subtitle: 'https://github.com/juniorSouza01',
            section: 'Sociais',
            icon: <IconBrandGithub strokeWidth={1.5} />,
            shortcut: ['f', 'g'],
            keywords: 'go-github',
            perform: () => window.open('')
        }
    ]
}

