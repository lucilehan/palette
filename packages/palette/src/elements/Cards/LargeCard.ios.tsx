import { color, Flex, Sans, space, Spacer } from "@artsy/palette"
import React from "react"
import { Image, View } from "react-native"
import { LinearGradient } from "react-native-linear-gradient"
import { Tag, TagProps } from "./Tag.ios"

export interface MediumCardProps {
  image: string
  title: string
  subtitle?: string
  tag?: TagProps
}

/**
 * `Large` is a card with one image one tall image, and text for title and subtitle
 * at the bottom.
 */
export const LargeCard: React.FC<MediumCardProps> = ({
  image,
  title,
  subtitle,
  tag,
}) => {
  return (
    <View
      style={{ width: "100%", aspectRatio: 1.0 / 1.33, flexDirection: "row" }}
    >
      <Flex flex={2} background={color("black10")}>
        <Image source={{ uri: image }} style={{ flex: 1 }} />
      </Flex>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.15,
        }}
      />
      <Flex
        style={{
          position: "absolute",
          bottom: 0,
          left: space(1),
          right: space(6),
        }}
      >
        <Sans size="5t" color={color("white100")}>
          {title}
        </Sans>
        {!!subtitle && (
          <Sans size="3t" color={color("white100")}>
            {subtitle}
          </Sans>
        )}
        <Spacer mt={1} />
      </Flex>
      {!!tag && (
        <Tag
          {...tag}
          style={{ position: "absolute", top: space(1), left: space(1) }}
        />
      )}
    </View>
  )
}
