import { createMuiTheme } from '@material-ui/core/styles';
import Theme from '../Resources/Theme';

const defaultTheme = createMuiTheme();
console.log({themeDataVslye: Theme});
const onTablet = defaultTheme.breakpoints.only('sm');
const onMobile = defaultTheme.breakpoints.only('xs');

const MuiTheme = createMuiTheme({
    palette: {
        primary: {
            main: Theme.Colors.Primary.main,
            contrastText: Theme.Colors.White
        },
        // secondary: Theme.Colors.Secondary,
        // error: {
        //     main: Theme.Colors.Error
        // },
        // text: {
        //     primary: Theme.Colors.Text.primary,
        //     secondary: Theme.Colors.Text.secondary
        // }
        // primary:{
        //     main: "#337ab7"
        // }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: 56,
            [onTablet]: { fontSize: 36 },
            fontWeight: Theme.FontWeight.Bold
        },
        h2: {
            fontSize: 45,
            lineHeight: 1.2,
            [onTablet]: { fontSize: 36 },
            [onMobile]: { fontSize: 32 }
        },
        h3: {
            fontSize: 36
        },
        h4: {
            fontSize: 32
        },
        h5: {
            fontSize: 24
        },
        h6: {
            fontSize: 20,
            fontWeight: 'normal',
            lineHeight: '24px'
        },
        subtitle1: {
            fontSize: 16,
            lineHeight: '20px'
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 'normal'
        },
        body1: {
            fontSize: 16,
            [defaultTheme.breakpoints.down('xs')]: {
                fontSize: 14
            },
        },
        body2: {
            fontSize: 14,
        },
        caption: {
            fontSize: 14
        },
        overline: {
            fontSize: 12
        },

    },
    overrides: {

        MuiTypography: {
        },

        MuiButton: {
            root: {

            },
            outlined: {

            },
            contained: {

            },
            disabled: {

            },
            text: {

            },

        },
        MuiDivider: {
            root: {
                margin: '16px 0px'
            }
        },
        MuiIcon: {
            fontSizeSmall: { fontSize: 16 }
        },
        MuiInput: {

        },
        MuiInputBase: {
            input: {

            },
        },
        MuiInputLabel: {
            animated: {

            }
        },
        MuiDialog: {
            paperWidthSm: {
                maxWidth: 'unset'
            },
            container: {

            }
        },
        MuiAppBar: {
            root: {
            }
        },
        MuiChip: {
            root: {
                backgroundColor: '#F5F5F5'
            },
            label: {
            },
        },
        MuiFab: {
            sizeSmall: {
                height: 36,
                width: 36
            }
        },
        MuiPaper: {
            root: { padding: '5px 10px' }
        }
    }
});

export default MuiTheme;