import React from 'react'

const Gallery = () => {
  const picsArray = [
    'https://images.wallpaperscraft.com/image/pluto_planet_dwarf_planet_trans_neptunian_objects_news_97479_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/space_sky_spiral_galaxy_99967_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/sunset_sea_rings_planet_90890_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/helix_nebula_space_stars_explosion_brilliance_97908_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/meteors_perseids_bristlecone_meteor_shower_98707_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/milky_way_starry_sky_galaxy_119519_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/milky_way_starry_sky_stars_136897_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/astronaut_spacesuit_butterflies_121755_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/stars_space_nebula_95432_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/sky_light_stars_85135_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/radiance_sky_night_118994_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/planets_space_satellite_128162_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/rendering_space_planets_light_99907_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/starry_sky_people_milky_way_121432_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/shuttle_open_space_flight_light_68895_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/cosmonaut_space_suit_space_123018_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/stars_funnel_spiral_135761_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/eclipse_moon_sun_129840_1920x1080.jpg'
  ]

  return(
    <div className="container">

        <a href={picsArray[0]}><img src={picsArray[0]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[1]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[2]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[3]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[4]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[5]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[6]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[7]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[8]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[9]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[10]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[11]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[12]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[13]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[14]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[15]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[16]} alt="universe" class="img-thumbnail"></img></a>
        <a href={picsArray[0]}><img src={picsArray[17]} alt="universe" class="img-thumbnail"></img></a>

    </div>

  )
}

export default Gallery
