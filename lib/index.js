/**
 * @function getTotalGold
 * @access public
 *
 * @param {Array<string>} csv
 * @param {number} time
 *
 * @returns {number}
 */
export function getTotalGold(csv, time) {
  let gold = 0;

  csv.forEach((character) => {
    let characterGold = 0;

    character
      .split('\n')
      .slice(1)
      .forEach((record) => {
        let [
          recordTime,
          recordGold
        ] = record.split(',');

        recordTime = Number(recordTime);
        recordGold = Number(recordGold);

        if (recordTime <= time) {
          characterGold = recordGold;
        }
      });

    gold += characterGold;
  });

  return gold;
}