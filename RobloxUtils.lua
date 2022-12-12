function secondsToTime(seconds)
	local secondsString = tostring(seconds % 60)	
	local minuteString = tostring(math.floor(seconds / 60))	
	if #secondsString == 1 then
		secondsString = '0' .. secondsString
	end
	if #minuteString == 1 then
		minuteString = '0' .. minuteString
	end
	return {minuteString, secondsString}
end