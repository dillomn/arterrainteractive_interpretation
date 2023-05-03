import React from 'react';
import './media.css';
import futureSyd from "./future_sydney.mp4"
import moorePoint from "./moore_point.mp4"
import hornsbyPark from "./hornsby_park.mp4"

function Media() {
  return (
    <div>
      <div className="Intro">
      <h2 className="title">OUR SOLUTIONS ARE DESIGNED FOR GOVERNMENT ANNOUNCEMENTS AND MEDIA RELEASES</h2>
      Arterra Interactive’s projects are utilised to provide an extremely visually-rich viewer experience across multiple media platforms, marketing channels and planning strategies.
  Here are some of our latest projects that have been delivered for media releases.        
      </div>
      <div className='media'>
          <table className='media-table'>
            <div className='media-table-1'>
              <td className='table-item'>
                <h1>Sydney 2100</h1>
                <h3>A visionary outlook of Sydney in the year 2100...</h3>
                7NEWS has been given an extraordinary glimpse into the future with a look at what Sydney is expected to look like at the end of the century. The same design team, using historic documents, has also given us a new view of the city's past.
              </td>
                <td className='tabel-item'>
                    <video width="520" height="auto" controls className='video'>
                        <source src={futureSyd} type='video/mp4' />
                    </video>
                </td>
            </div>
            <div className='media-table-2'>
              <td className='tabel-item'>
                  <video width="520" height="auto" controls className='video'>
                      <source src={moorePoint} type='video/mp4' />
                  </video>
              </td>
              <td className='table-item'>
                <h1>Moore Point, Liverpool</h1>
                <h3>Arterra Interactive visualises Liverpool's future.</h3>
                Arterra Interactive's visualisation for the Moore Point Precinct is a seamless integration of photo-realistic digital model into live action footage. Our team highlighted the project's overarching importance using live video camera tracking, motion graphics, info-graphics and site context labeling.
              </td>
            </div>
            <div className='media-table-1'>
              <td className='table-item'>
                <h1>Hornsby Park</h1>
                <h3>Transformation into a Recreational Haven.</h3>
                Working alongside Hornsby Council and Clouston Landscape Architecture to deliver the transformation of Hornsby Quarry Park. The animation showcasing the proposed master plan with abundant amenities including walking, cycling, mountain biking, climbing, field sports, and other activities
              </td>
                <td className='tabel-item'>
                    <video width="520" height="auto" controls className='video'>
                        <source src={hornsbyPark} type='video/mp4' />
                    </video>
                </td>
            </div>
          </table>
      </div>
    </div>
  );
}

export default Media;
