ESX = nil
TriggerEvent(Config.SharedObjectName, function(obj) ESX = obj end)

Citizen.CreateThread(function()
	for i = 1, #Config.Cards, 1 do
		ESX.RegisterUsableItem(Config.Cards[i], function(source)
			TriggerClientEvent('event:control:idcard', source, Config.Cards[i])
		end)
	end
end)