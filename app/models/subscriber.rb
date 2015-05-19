class Subscriber < ActiveRecord::Base
  def send_message(msg, image_url)
    @twilio_number = "17735701269"
    twilio_sid = "ACdca45ba89ac6c7170a6d0ae918965a82"
    twilio_token = "1812a37e2f897f71ed92bb9127e26026"
    @client = Twilio::REST::Client.new twilio_sid, twilio_token
    
    message = @client.account.messages.create(
      :from => @twilio_number,
      :to => self.phone_number,
      :body => msg,
      :media_url => image_url
    )
    puts message.to
  end

end
