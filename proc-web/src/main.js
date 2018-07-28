import { equalRandomDirections, move } from './data/constants/walker';
import { maxWidth, maxHeight } from './data/constants/canvas';

function init() {
  const centerX = Math.floor(maxWidth / 2);
  const centerY = Math.floor(maxHeight / 2);

  d3.select('body')
    .append('div')
    .attr('id', 'vis')
    .style('height', `${maxHeight}px`)
    .style('width', `${maxWidth}px`);
  
  const vis = d3.select('#vis')
    .append('svg:svg')
    .attr('width', maxWidth)
    .attr('height', maxHeight);

  const plotData = [[centerX, centerY]];
  
  update(plotData);
}

function update(plotData) {
  const vis = d3.select('svg')
    .selectAll('circle')
    .data(plotData)
    .enter()
    .append('rect')
    .attr('x', function(d) { return d[0] })
    .attr('y', function(d) { return d[1] })
    .attr('width', 2)
    .style('height', 2);

  const lastCoords = plotData[plotData.length - 1];
  const [ currentX, currentY ] = lastCoords;
  
  setTimeout(() => {
    return walker(currentX, currentY, maxWidth, maxHeight, plotData);
  }, 300);
}

function walker(currentX, currentY, maxX, maxY, plotData) {
  const newDirection = equalRandomDirections[Math.floor(Math.random() * 4)];
  const newCoordinates = move[newDirection](currentX, currentY, maxX, maxY);

  plotData.push(newCoordinates);
  setTimeout(() => {
    return update(plotData);
  }, 300);
}

init();