require 'rubygems'
require 'twilio-ruby'
require 'sinatra'

# Set port for compatability with Nitrous.IO 
configure :development do   
  set :bind, '0.0.0.0'   
  set :port, 3000 # Not really needed, but works well with the "Preview" menu option
end

account_sid = "ACdca45ba89ac6c7170a6d0ae918965a82"
auth_token = "1812a37e2f897f71ed92bb9127e26026"
client = Twilio::REST::Client.new account_sid, auth_token
 
from = "+17735701269" # Your Twilio number
 
friends = {
"+17732181720" => "Curious George",

}
friends.each do |key, value|
  client.account.messages.create(
    :from => from,
    :to => key,
    :body => "Hey #{value}, Monkey party at 6PM. Bring Bananas!",
    :media_url => "https://demo.twilio.com/owl.png"
  )
  puts "Sent message to #{value}"
end