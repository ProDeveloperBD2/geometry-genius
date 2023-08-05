/* 1.Triangle Calculate Start */
document.getElementById('triangle-btn').addEventListener('click', function () {

    /* triangle b Field value start */
    const bValue = allField('triangle-b-field');
    /* triangle b Field value end */


    /* triangle h Field value start */
    const hValue = allField('triangle-h-field')
    /* triangle h Field value end */

    /* triangle bValue multiply hValue start */
    const currentvalue = 0.5 * bValue * hValue;
    /* triangle bValue multiply hValue end */


    /* triangle B And H Area Value Set Start */
    allAreaValueSet('triangle-b-area').innerText = bValue;
    allAreaValueSet('triangle-h-area').innerText = hValue;
    /* triangle B And H Area Value Set End */


    const triangleAnsawr = document.getElementById('triangle-ansawr')
    const triangleAnsawrValue = triangleAnsawr.innerText = currentvalue;

})
/* 1.Triangle Calculate End */





/* 2.Rectangle Calculate Start */
document.getElementById('rectangle-btn').addEventListener('click', function () {

    /* rectangle w Field value start */
    const wValue = allField('rectangle-w-field');
    /* rectangle w Field value end */


    /* rectangle l Field value start */
    const lValue = allField('rectangle-l-field')
    /* rectangle l Field value end */

    /* rectangle wValue multiply lValue start */
    const currentvalue = wValue * lValue;
    /* rectangle wValue multiply lValue end */


    /* rectangle W And L Area Value Set Start */
    allAreaValueSet('rectangle-w-area').innerText = wValue;
    allAreaValueSet('rectangle-l-area').innerText = lValue;
    /* rectangle W And L Area Value Set End */


    const rectangleAnsawr = document.getElementById('rectangle-ansawr')
    const rectangleAnsawrValue = rectangleAnsawr.innerText = currentvalue;

})
/* 2.Rectangle Calculate End */





/* 3.Parallelogram Calculate Start */
document.getElementById('parallelogram-btn').addEventListener('click', function () {

    /* parallelogram b Field value start */
    const bValue = allField('parallelogram-b-field');
    /* parallelogram b Field value end */


    /* parallelogram h Field value start */
    const hValue = allField('parallelogram-h-field')
    /* parallelogram h Field value end */

    /* parallelogram bValue multiply hValue start */
    const currentvalue = bValue * hValue;
    /* parallelogram bValue multiply hValue end */


    /* parallelogram B And H Area Value Set Start */
    allAreaValueSet('parallelogram-b-area').innerText = bValue;
    allAreaValueSet('parallelogram-h-area').innerText = hValue;
    /* parallelogram B And H Area Value Set End */


    const parallelogramAnsawr = document.getElementById('parallelogram-ansawr')
    const parallelogramAnsawrValue = parallelogramAnsawr.innerText = currentvalue;

})
/* 3.Parallelogram Calculate End */







/* 4.Rhombus Calculate Start */
document.getElementById('rhombus-btn').addEventListener('click', function () {

    /* rhombus d1 Field value start */
    const d1Value = allField('rhombus-d1-field');
    /* rhombus d1 Field value end */


    /* rhombus d2 Field value start */
    const d2Value = allField('rhombus-d2-field')
    /* rhombus d2 Field value end */

    /* rhombus d1Value multiply d2Value start */
    const currentvalue = 0.5 * d1Value * d2Value;
    /* rhombus d1Value multiply d2Value end */


    /* rhombus d1 And d2 Area Value Set Start */
    allAreaValueSet('rhombus-d1-area').innerText = d1Value;
    allAreaValueSet('rhombus-d2-area').innerText = d2Value;
    /* rhombus d1 And d2 Area Value Set End */


    const rhombusAnsawr = document.getElementById('rhombus-ansawr')
    const rhombusAnsawrValue = rhombusAnsawr.innerText = currentvalue;

})
/* 4.Rhombus Calculate End */







/* 5.Pentagon Calculate Start */
document.getElementById('pentagon-btn').addEventListener('click', function () {

    /* pentagon p Field value start */
    const pValue = allField('pentagon-p-field');
    /* rhombus p Field value end */


    /* pentagon b Field value start */
    const bValue = allField('pentagon-b-field')
    /* pentagon b Field value end */

    /* pentagon pValue multiply bValue start */
    const currentvalue = 0.5 * pValue * bValue;
    /* pentagon pValue multiply bValue end */


    /* pentagon p And b Area Value Set Start */
    allAreaValueSet('pentagon-p-area').innerText = pValue;
    allAreaValueSet('pentagon-b-area').innerText = bValue;
    /* pentagon p And b Area Value Set End */


    const pentagonAnsawr = document.getElementById('pentagon-ansawr')
    const pentagonAnsawrValue = pentagonAnsawr.innerText = currentvalue;

})
/* 5.Pentagon Calculate End */






/* 6.Ellipse Calculate Start */
document.getElementById('ellipse-btn').addEventListener('click', function () {

    /* ellipse a Field value start */
    const aValue = allField('ellipse-a-field');
    /* ellipse a Field value end */


    /* ellipse b Field value start */
    const bValue = allField('ellipse-b-field')
    /* ellipse b Field value end */

    /* pentagon pValue multiply bValue start */
    const currentvalue = aValue * bValue;
    /* pentagon pValue multiply bValue end */


    /* ellipse a And b Area Value Set Start */
    allAreaValueSet('ellipse-a-area').innerText = aValue;
    allAreaValueSet('ellipse-b-area').innerText = bValue;
    /* ellipse a And b Area Value Set End */


    const ellipseAnsawr = document.getElementById('ellipse-ansawr')
    const ellipseAnsawrValue = ellipseAnsawr.innerText = currentvalue;

})
/* 6.Ellipse Calculate End */