class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    const ps = [];

    for (let i = 0; i < position.length; i++) {
      ps.push([position[i], speed[i]]);
    }

    ps.sort((a, b) => b[0] - a[0]);

    let lastIteration = 0;
    let fleets = 0;
    for (let i = 0; i < ps.length; i++) {
      const [p, s] = ps[i];

      // smaller iteration = faster speed
      const iteration = (target - p) / s;
      // if current iteration < last iteration, then
      // that means current car is faster than ahead
      // will hit fleet and merge into one

      if (iteration <= lastIteration) {
      }

      // if current iteration > last iteration, then
      // that means current car is slower than ahead
      // and will never hit fleet

      if (iteration > lastIteration) {
        fleets += 1;
        lastIteration = iteration;
      }
    }

    return fleets;
  }
}
