import Button from "@mui/material/Button"
import { tss } from "tss-react/mui"
import Typography from "@mui/material/Typography"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "../i18n"
import { useOidc } from "../oidc"


type Props = {
    className?: string;
}

export function Header(props: Props) {
    const { className } = props
    const { cx, classes } = useStyles()

    const { t } = useTranslation({ Header })

    const { logout } = useOidc();

    return (
        <div className={cx(className, classes.root)}>
            <Typography
                variant="h4"
            >
                {t("Todo list")}
            </Typography>


            {/*<Button
                onClick={() => login}
            >
                {t("Log in")}
            </Button>*/}

            <Button
                variant="outlined"
                onClick={() => logout({
                    "redirectTo": "home"
                })}
            >
                {t("Log out")}
            </Button>

        </div>
    )
}

const useStyles = tss
    .withName({ Header })
    .create({
        "root": {
            "display": "flex",
            "justifyContent": "space-between",
        }
    })


export const { i18n } = declareComponentKeys<
    | "Todo list"
    //| "Log in"
    | "Log out"
>()({ Header })