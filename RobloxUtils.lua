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


function vector3Projection(vector_A, vector_B)
	local result = 0
	local scalar = vector_A.X * vector_B.X + vector_A.Y * vector_B.Y + vector_A.Z + vector_B.Z
	local vectorB_len = math.sqrt(vector_B.X * vector_B.X + vector_B.Y * vector_B.Y + vector_B.Z * vector_B.Z)
	if vectorB_len ~= 0 then
		result = scalar / vectorB_len
	end
	return result
end
