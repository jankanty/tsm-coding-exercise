import {getTotalGold} from '.';



describe('getTotalGold', () => {
  test('Example 1', () => {
    const csv = [
      'time,gold\n0,10\n2,110',
      'time,gold\n1,50\n5,20',
      'time,gold\n5,8\n10,9'
    ];

    const time = 2;

    expect(getTotalGold(csv, time)).toEqual(160);
  });

  test('Example 2', () => {
    const csv = [
      'time,gold\n0,10\n2,110',
      'time,gold\n1,50\n5,20',
      'time,gold\n5,8\n10,9'
    ];

    const time = 9;

    expect(getTotalGold(csv, time)).toEqual(138);
  });
});