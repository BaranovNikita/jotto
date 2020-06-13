/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute
 * @returns {ShallowWrapper}
 */
export const findByDataTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
