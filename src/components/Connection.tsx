import Button from "@mui/material/Button"
import { tss } from "tss-react/mui"
import Typography from "@mui/material/Typography"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "../i18n"

type Props = {
    className?: string;
}

export function Connection(props: Props) {
    const { className } = props
    const { cx, classes } = useStyles()

    const { t } = useTranslation({ Connection })

    return (
        <div className={cx(className, classes.root)}>
            <Typography
                variant="h4"
            >
                {t("Todo List")}
            </Typography>

            <Button>Connection</Button>
        </div>
    )
}

const useStyles = tss
    .withName({ Connection })
    .create({
        "root": {
            "display": "flex",
            "justifyContent": "space-between",
            "padding": "10px 30px",
            "border": "1px solid red"
        }
    })


export const { i18n } = declareComponentKeys<
    | "Todo List"
>()({ Connection })