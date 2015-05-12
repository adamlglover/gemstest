ActionMailer::Base.smtp_settings = {
  user_name: "adamlglover85@gmail.com",
  password: "VNiVqp-nhFdYc3YL01pzdA",
  enable_starttls_auto: true,
  address: "smtp.mandrillapp.com",
  port: 587,
  authentication: "login"
}

ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.default charset: "utf-8"