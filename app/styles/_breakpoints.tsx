// Media step breakpoint mixin based on Angular Material lib
// $breakpoints: (
//     xs: 'screen and (max-width: 599px)',
//     sm: 'screen and (min-width: 600px) and (max-width: 959px)',
//     md: 'screen and (min-width: 960px) and (max-width: 1279px)',
//     lg: 'screen and (min-width: 1280px) and (max-width: 1919px)',
//     xl: 'screen and (min-width: 1920px) and (max-width: 5000px)',
//     lt-sm: 'screen and (max-width: 599px)',
//     lt-md: 'screen and (max-width: 959px)',
//     lt-lg: 'screen and (max-width: 1279px)',
//     lt-xl: 'screen and (max-width: 1919px)',
//     gt-xs: 'screen and (min-width: 600px)',
//     gt-sm: 'screen and (min-width: 960px)',
//     gt-md: 'screen and (min-width: 1280px)',
//     gt-lg: 'screen and (min-width: 1920px)'
// ) !default;

// // Re-map the breakpoints for the helper classes
// $helper-breakpoints: (
//     xs: null,
//     sm: 'gt-xs',
//     md: 'gt-sm',
//     lg: 'gt-md',
//     xl: 'gt-lg'
// );

// @mixin media-breakpoint($breakpointName) {

//     $mediaQuery: map-get($breakpoints, $breakpointName);

//     @if ($mediaQuery == null) {
//         @content
//     } @else {
//         @media #{$mediaQuery} {
//             @content
//         }
//     }
// }
