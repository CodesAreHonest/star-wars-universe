import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding : theme.spacing(1),
        fontSize: theme.spacing(2),
        color   : "dodgeblue",
        border  : "2px solid #313194",
        outline : "none"
    }
}));