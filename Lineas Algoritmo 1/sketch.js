
function setup() 
{
	createCanvas(windowWidth, windowHeight);
}

function draw() 
{
	drawRect(0, 0, windowWidth, windowHeight)
	//drawRect(windowWidth, windowHeight, 0, 0)

	drawRect(0, windowHeight, windowWidth, 0)
	//drawRect(windowWidth, 0, 0, windowHeight)

	drawRect(0, windowHeight/2, windowWidth, windowHeight/2)
	//drawRect(windowWidth, windowHeight/2, 0, windowHeight/2)
	
	drawRect(windowWidth/2, 0, windowWidth/2, windowHeight)
	//drawRect(windowWidth/2, windowHeight, windowWidth/2, 0)
}

function drawRect(x0, y0, x1, y1)
{
	let	y
	let m=(y1-y0)/(x1-x0)
	let b=y0-m*x0

	if(x0<x1)
	{
		for(let x=x0; x<x1; x++)
		{
			y=m*x+b
			point(x, y)	
		}
	}
	else
	{
		if(x0==x1)
		{
			if(y0<y1)
			{
				x=x0
				for(y=y0; y<y1; y++)
				{
					point(x, y)	
				}
			}
			else
			{
				x=x1
				for(y=y1; y<y0; y++)
				{
					point(x, y)	
				}
			}
		}
		else
		{
			for(let x=x1; x<x0; x++)
			{
				y=m*x+b
				point(x, y)	
			}
		}
	}
}
