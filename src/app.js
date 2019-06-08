import { throttle } from 'lodash'

// Bootstrap js everything
import 'bootstrap'

// own SCSS file
import './main.scss'

// add jQuery
import '../node_modules/jquery'

// add popper.js
import '../node_modules/popper.js'

// add anime js
// import anime from 'lib/anime.es.js';

import onLoadEvents from './onLoadEvents'

$(document).ready(function() {

  // const throttledScroll = throttle(onLoadEvents, 50)

  $(window).on('load', onLoadEvents)
})