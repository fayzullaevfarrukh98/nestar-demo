import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";
import Link from "next/link";

const PopularProperties = ({ initialInput = [1, 2, 3, 4, 5, 6, 7], ...props }: any) => {
  //                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //                         props da default qiymat berish (ishonchli usul)

  const [popularProperties, setPopularProperties] =
    useState<number[]>(initialInput ?? []);
  //                                ^^^^^^^
  //                   undefined kelsa, bo'sh massiv ishlatadi

  return (
    <Stack className="popular-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Popular Properties</span>
            <p>Popular is based on view</p>
          </Box>
          <Box className="right">
            <div className="more-box">
              <Link href={"/property"}>
                <span>See all categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          {popularProperties.length === 0 ? (
            <Box className="empty-list">Popular empty</Box>
          ) : (
            <Swiper
              className="popular-property-swiper"
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{
                el: ".swiper-popular-pagination",
              }}
            >
              {popularProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className="popular-property-slide">
                    <PopularPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

// Bu qatorni olib tashlash ham mumkin, chunki yuqorida default qiymat berdik
// PopularProperties.defaultProps = {
//   initialInput: [1, 2, 3, 4, 5, 6, 7],
// };

export default PopularProperties;