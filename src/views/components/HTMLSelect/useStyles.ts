import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding      : `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
        fontSize     : theme.spacing(2),
        border       : `1px solid black`,
        outline      : "none",
        color        : theme.palette.primary.dark,
        fontWeight   : 600,
        borderRadius : theme.spacing(0.5),
        textAlignLast: "center"
    }
}));