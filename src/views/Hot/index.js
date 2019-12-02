import React, { Component } from 'react'
import style from './index.module.scss'
import Slide from './Slide';
import Store from './Store';
class Hot extends Component {
    render() {
        return (
            <div className={style.hot}>
                <div className={style.rank}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAB2BAMAAAB1xq2/AAAAKlBMVEVHcExDJAtEJAxDJA9DIwtDJAxDIws/JQBEIQpEIwxEJAxDIwtDIwtDIwt5hIz3AAAADnRSTlMAs34OTjRhBRkoP3Cji0R6mLEAAAMMSURBVEjH7Zbda9NQGMZfSdIkrV4c8ANlg3LapB+7iWSg+AFbjBW/oBQzGHjRBe0GvYkV7dCb0pvpQCgbyIo3XR1TOoTZ6WTGC3e1m96Id/41npOkW0IzQXAisheannN+5DnPed9zDgH4b4JRAt2jvR7AsV7PAmgjJAF86TmxA3AEDRGOkAWXEYkEvEdOnPIhZpuODFshKOYOFUPQA4R+vEPo6x39FkL39Gs+tIyGgd9Gp4kphGrU4S4aR8cBpujDhwzjLkFT6AzAODrpR24QZycAlg8YDanqpX1s/Mq8b8nfQpd8lpSEJGonBPXTG4K8oighCF5Q9B3CEH+blAV8yB+zc3AYfyvQvvHn0WEceFT3R21ySD84LXGGPteAGURsCpgt0KDScm/wZ9rSnLqpqqRd+dzJlwlqu7c6izG+T36YdBcwLtbzGpN05YSmNrlkyIZGkElue7aoRRPeVDx9PUlFhCztEkHFZ4PJQkGBSKJahdxmt1Tqs/bq1esSRY/XMM6buVyu66JHOSwbOA0Fco2ImqGUvOVQw7KpwMUkLNQUZ8yHGNqod6frjTRQVdO2bazs2TCfyJXXCc7u2hvlTqdj9pGmsBJMRj6mRN3Ur/gEeXsE2mNk6bjojJVVVfUQrLyFC/R/XnHn8pLmVCIPFr8IE9605WazqXkoth4p0mzQQhSURd9c0G5EU3AT2Axtr2V8SJBBkGChwdsk7d1krQyC0bXcem0An4TKGLwimTIskg0BZ71lkZfn6G7g3S6pdtU6PEu/F8IWQHSdc/a5+CaISKHYuIuefuL0FX3lRgjSGvRM4ZE9ZEzEuayRh2gyoMeVRmYwjnMYr0O7OIA8wUgS5q1wG7EW2AMo6iAGolKd2iDaffT8ZZyTmvScj43qek7WW33U1BwbeRAx1RMzu4JYejga59KqBQUMfiSacsOzwcpmAMXkXYeRlhZAwmyGUR1BhYEgIjZibjZSMIhEmkOJ5HAQ9ZccithQFF0NIsGYSHsogqcDggKmA76P4RrjfNecpwfs3L+0c38CYwTk/O+qFngAAAAASUVORK5CYII=" alt="111"/>
                </div>
                <div className={style.slide}>
                    <Slide></Slide>
                </div>
                <div className={style.store}>
                    <Store {...this.props}></Store>
                </div>
            </div>
        )
    }
}
export default Hot