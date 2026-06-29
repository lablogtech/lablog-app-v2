import type { ReactNode } from "react"
import { Box, Text, Title } from "@mantine/core"
import styles from "./Heading.module.css"

type HeadingClassNames = {
  root?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  description?: string
}

type HeadingProps = {
  eyebrow?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  description?: ReactNode | ReactNode[]
  order?: 1 | 2 | 3 | 4 | 5 | 6
  classNames?: HeadingClassNames
}

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export default function Heading({ eyebrow, title, subtitle, description, order = 2, classNames }: HeadingProps) {
  const descriptions = Array.isArray(description) ? description : description ? [description] : []

  return (
    <Box className={joinClasses(styles.root, classNames?.root)}>
      {eyebrow ? <Text className={joinClasses(styles.eyebrow, classNames?.eyebrow)}>{eyebrow}</Text> : null}

      <Title order={order} className={joinClasses(styles.title, classNames?.title)}>
        {title}
      </Title>

      {subtitle ? <Text className={joinClasses(styles.subtitle, classNames?.subtitle)}>{subtitle}</Text> : null}

      {descriptions.map((item, index) => (
        <Text key={index} className={joinClasses(styles.description, classNames?.description)}>
          {item}
        </Text>
      ))}
    </Box>
  )
}
