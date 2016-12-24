import _ from 'pix-live/utils/lodash-custom';


// Input : "1,2,4" comes from API, therefore is untrusted
// Output : [true, true, false, true] : Will be used by Ember checkboxes

export default function stringToArrayOfBoolean (csvString) {
  return _.chain(csvString) // in the worst case : ',4, 2 , 2,1,  ,'
    .checkPoint((e) => _.isString(e) ? e : '') // check if string
    .split(',') // now ['', '4', ' 2 ', ' 2', '1', '  ', '']
    .map(_.trim) // now ['', '4', '2', '2', '1', '', '']
    .reject(_.isEmpty) // now ['4', '2', '2', '1']
    .checkPoint((e) => _.every(e, _.isStrictlyPositiveInteger) ? e : []) // check if int >= 1
    .map(_.parseInt) // now [4, 2, 2, 1]
    .sortBy() // now [1, 2, 2, 4]
    .uniqBy() // now [1, 2, 4]
    .map((e) => e - 1) // now [0, 1, 3]
    .thru((e) => _.times(_.max(e) + 1, (o) => _(e).includes(o)))
    .value();
}