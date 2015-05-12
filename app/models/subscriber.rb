class Subscriber < ActiveRecord::Base
  def send_message(msg, image_url)
    @twilio_number = "17735701269"
     twilio_sid = "PNddb71f8ed7b1c9457c5c9fec76d25be0"
    twilio_token = "1812a37e2f897f71ed92bb9127e26026"
    @client = Twilio::REST::Client.new twilio_sid, twilio_token
    message = @client.account.messages.create(
      :from => @twilio_number,
      :to => 17732181720,
      :body => msg,
      :media_url => image_url
    )
    puts message.to
  end

end
