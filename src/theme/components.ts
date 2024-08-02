import { MantineTheme, MantineThemeOther } from "@mantine/core";

const Fields: MantineThemeOther = {
  defaultProps: {
    size: "md",
    radius: "md",
    miw: "14rem",
  },
  styles: (theme: MantineTheme) => ({
    label: {
      fontSize: 14,
      fontWeight: 400,
      marginBottom: 4,
      color: theme.colors.neutral[5],
    },
    input: {
      fontSize: 14,
    },
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: any = {
  DatePicker: Fields,
  Select: Fields,
  Textarea: Fields,
  TextInput: Fields,
  DateInput: Fields,
  NumberInput: Fields,
  PasswordInput: Fields,
  DatePickerInput: {
    ...Fields,
    defaultProps: {
      popoverProps: {
        position: "bottom",
      },
      ...Fields.defaultProps,
    },
  },
  MultiSelect: Fields,
  NavLink: {
    defaultProps: {
      variant: "light",
      styles: {
        label: {
          fontWeight: 500,
        },
      },
    },
  },
  Button: {
    defaultProps: {
      size: "md",
      radius: "8px",
    },
  },
  Checkbox: {
    styles: (theme: MantineTheme) => ({
      label: {
        fontSize: 18,
        fontWeight: 500,
        color: theme?.colors?.neutral[6],
      },
    }),
  },
  Switch: {
    styles: (theme: MantineTheme) => ({
      label: {
        fontSize: 18,
        fontWeight: 500,
        color: theme?.colors?.neutral[6],
      },
    }),
  },
  Pagination: {
    defaultProps: {
      color: "info.5",
    },
  },
  LoadingOverlay: {
    defaultProps: {
      zIndex: 1,
      overlayBlur: 1,
    },
  },
  Menu: {
    defaultProps: {
      shadow: "md",
    },
  },
  Modal: {
    defaultProps: {
      radius: "md",
      centered: true,
      closeButtonProps: {
        size: "sm",
      },
    },
    styles: (theme: MantineTheme) => ({
      // trapFocus: false,
      // body: { marginTop: 24 },
      title: {
        fontWeight: 600,
        color: theme.colors.neutral[8],
      },
      // close: {
      //   top: 16,
      //   right: 16,
      //   position: 'absolute',
      // },
    }),
  },
  Card: {
    defaultProps: {
      shadow: "none",
    },
  },
};

export default components;
