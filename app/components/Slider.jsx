import React from 'react'
import Slider from 'react-native-swiper'
import { Image } from 'native-base'
import { gannerateImageLink } from '~helpers/others'

export default ({ images }) => {
  return (
    <Slider autoplayTimeout={4} showsButtons={false} showsPagination={true} key={images.length} activeDotColor="black">
      {images.map((img, index) => (
        <Image source={{ uri: gannerateImageLink(img) }} key={index} w="full" h="full" alt={`images_${index}`}></Image>
      ))}
    </Slider>
  )
}
